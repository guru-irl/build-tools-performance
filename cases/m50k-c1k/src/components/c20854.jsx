import React from 'react';
const LABEL_20854 = 'component_20854';
export function Component20854({ value = 20854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20854, 'data-value': derived.doubled }, children);
}
export default Component20854;
