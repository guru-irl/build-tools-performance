import React from 'react';
const LABEL_41873 = 'component_41873';
export function Component41873({ value = 41873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41873, 'data-value': derived.doubled }, children);
}
export default Component41873;
