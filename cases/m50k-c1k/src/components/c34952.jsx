import React from 'react';
const LABEL_34952 = 'component_34952';
export function Component34952({ value = 34952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34952, 'data-value': derived.doubled }, children);
}
export default Component34952;
