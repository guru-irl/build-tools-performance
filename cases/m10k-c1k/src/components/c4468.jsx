import React from 'react';
const LABEL_4468 = 'component_4468';
export function Component4468({ value = 4468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4468, 'data-value': derived.doubled }, children);
}
export default Component4468;
