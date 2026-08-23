import React from 'react';
const LABEL_15944 = 'component_15944';
export function Component15944({ value = 15944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15944, 'data-value': derived.doubled }, children);
}
export default Component15944;
