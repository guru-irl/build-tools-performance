import React from 'react';
const LABEL_19524 = 'component_19524';
export function Component19524({ value = 19524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19524, 'data-value': derived.doubled }, children);
}
export default Component19524;
