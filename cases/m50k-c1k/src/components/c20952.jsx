import React from 'react';
const LABEL_20952 = 'component_20952';
export function Component20952({ value = 20952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20952, 'data-value': derived.doubled }, children);
}
export default Component20952;
