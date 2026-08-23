import React from 'react';
const LABEL_4346 = 'component_4346';
export function Component4346({ value = 4346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4346, 'data-value': derived.doubled }, children);
}
export default Component4346;
