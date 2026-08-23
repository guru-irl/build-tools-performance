import React from 'react';
const LABEL_17693 = 'component_17693';
export function Component17693({ value = 17693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17693, 'data-value': derived.doubled }, children);
}
export default Component17693;
