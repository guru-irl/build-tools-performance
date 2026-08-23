import React from 'react';
const LABEL_25417 = 'component_25417';
export function Component25417({ value = 25417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25417, 'data-value': derived.doubled }, children);
}
export default Component25417;
