import React from 'react';
const LABEL_38514 = 'component_38514';
export function Component38514({ value = 38514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38514, 'data-value': derived.doubled }, children);
}
export default Component38514;
