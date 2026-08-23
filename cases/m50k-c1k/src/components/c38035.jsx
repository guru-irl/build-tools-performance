import React from 'react';
const LABEL_38035 = 'component_38035';
export function Component38035({ value = 38035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38035, 'data-value': derived.doubled }, children);
}
export default Component38035;
