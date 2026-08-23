import React from 'react';
const LABEL_34944 = 'component_34944';
export function Component34944({ value = 34944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34944, 'data-value': derived.doubled }, children);
}
export default Component34944;
