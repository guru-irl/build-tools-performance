import React from 'react';
const LABEL_20190 = 'component_20190';
export function Component20190({ value = 20190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20190, 'data-value': derived.doubled }, children);
}
export default Component20190;
