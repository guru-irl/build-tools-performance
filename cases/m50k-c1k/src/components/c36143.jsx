import React from 'react';
const LABEL_36143 = 'component_36143';
export function Component36143({ value = 36143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36143, 'data-value': derived.doubled }, children);
}
export default Component36143;
