import React from 'react';
const LABEL_34723 = 'component_34723';
export function Component34723({ value = 34723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34723, 'data-value': derived.doubled }, children);
}
export default Component34723;
