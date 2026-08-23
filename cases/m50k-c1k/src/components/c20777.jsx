import React from 'react';
const LABEL_20777 = 'component_20777';
export function Component20777({ value = 20777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20777, 'data-value': derived.doubled }, children);
}
export default Component20777;
