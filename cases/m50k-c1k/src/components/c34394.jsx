import React from 'react';
const LABEL_34394 = 'component_34394';
export function Component34394({ value = 34394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34394, 'data-value': derived.doubled }, children);
}
export default Component34394;
