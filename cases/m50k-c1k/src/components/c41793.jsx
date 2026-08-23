import React from 'react';
const LABEL_41793 = 'component_41793';
export function Component41793({ value = 41793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41793, 'data-value': derived.doubled }, children);
}
export default Component41793;
