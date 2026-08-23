import React from 'react';
const LABEL_34270 = 'component_34270';
export function Component34270({ value = 34270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34270, 'data-value': derived.doubled }, children);
}
export default Component34270;
