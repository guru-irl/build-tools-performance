import React from 'react';
const LABEL_11518 = 'component_11518';
export function Component11518({ value = 11518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11518, 'data-value': derived.doubled }, children);
}
export default Component11518;
