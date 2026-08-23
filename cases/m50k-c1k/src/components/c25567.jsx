import React from 'react';
const LABEL_25567 = 'component_25567';
export function Component25567({ value = 25567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25567, 'data-value': derived.doubled }, children);
}
export default Component25567;
