import React from 'react';
const LABEL_19670 = 'component_19670';
export function Component19670({ value = 19670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19670, 'data-value': derived.doubled }, children);
}
export default Component19670;
