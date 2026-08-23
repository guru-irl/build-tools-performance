import React from 'react';
const LABEL_20394 = 'component_20394';
export function Component20394({ value = 20394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20394, 'data-value': derived.doubled }, children);
}
export default Component20394;
