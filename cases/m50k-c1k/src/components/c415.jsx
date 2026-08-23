import React from 'react';
const LABEL_415 = 'component_415';
export function Component415({ value = 415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_415, 'data-value': derived.doubled }, children);
}
export default Component415;
