import React from 'react';
const LABEL_19730 = 'component_19730';
export function Component19730({ value = 19730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19730, 'data-value': derived.doubled }, children);
}
export default Component19730;
