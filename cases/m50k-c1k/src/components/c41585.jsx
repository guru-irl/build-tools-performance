import React from 'react';
const LABEL_41585 = 'component_41585';
export function Component41585({ value = 41585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41585, 'data-value': derived.doubled }, children);
}
export default Component41585;
