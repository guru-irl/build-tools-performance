import React from 'react';
const LABEL_19317 = 'component_19317';
export function Component19317({ value = 19317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19317, 'data-value': derived.doubled }, children);
}
export default Component19317;
