import React from 'react';
const LABEL_19373 = 'component_19373';
export function Component19373({ value = 19373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19373, 'data-value': derived.doubled }, children);
}
export default Component19373;
