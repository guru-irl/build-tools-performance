import React from 'react';
const LABEL_19733 = 'component_19733';
export function Component19733({ value = 19733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19733, 'data-value': derived.doubled }, children);
}
export default Component19733;
