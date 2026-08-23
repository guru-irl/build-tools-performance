import React from 'react';
const LABEL_41166 = 'component_41166';
export function Component41166({ value = 41166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41166, 'data-value': derived.doubled }, children);
}
export default Component41166;
