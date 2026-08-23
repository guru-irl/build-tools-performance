import React from 'react';
const LABEL_18418 = 'component_18418';
export function Component18418({ value = 18418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18418, 'data-value': derived.doubled }, children);
}
export default Component18418;
