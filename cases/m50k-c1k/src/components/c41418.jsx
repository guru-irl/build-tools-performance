import React from 'react';
const LABEL_41418 = 'component_41418';
export function Component41418({ value = 41418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41418, 'data-value': derived.doubled }, children);
}
export default Component41418;
