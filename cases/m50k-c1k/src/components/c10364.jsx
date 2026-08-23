import React from 'react';
const LABEL_10364 = 'component_10364';
export function Component10364({ value = 10364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10364, 'data-value': derived.doubled }, children);
}
export default Component10364;
