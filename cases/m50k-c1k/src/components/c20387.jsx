import React from 'react';
const LABEL_20387 = 'component_20387';
export function Component20387({ value = 20387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20387, 'data-value': derived.doubled }, children);
}
export default Component20387;
