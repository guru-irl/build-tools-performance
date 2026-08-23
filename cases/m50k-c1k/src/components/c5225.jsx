import React from 'react';
const LABEL_5225 = 'component_5225';
export function Component5225({ value = 5225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5225, 'data-value': derived.doubled }, children);
}
export default Component5225;
