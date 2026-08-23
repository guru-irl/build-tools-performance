import React from 'react';
const LABEL_26401 = 'component_26401';
export function Component26401({ value = 26401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26401, 'data-value': derived.doubled }, children);
}
export default Component26401;
