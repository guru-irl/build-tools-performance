import React from 'react';
const LABEL_20573 = 'component_20573';
export function Component20573({ value = 20573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20573, 'data-value': derived.doubled }, children);
}
export default Component20573;
