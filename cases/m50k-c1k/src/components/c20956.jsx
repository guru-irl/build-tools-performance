import React from 'react';
const LABEL_20956 = 'component_20956';
export function Component20956({ value = 20956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20956, 'data-value': derived.doubled }, children);
}
export default Component20956;
