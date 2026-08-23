import React from 'react';
const LABEL_43317 = 'component_43317';
export function Component43317({ value = 43317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43317, 'data-value': derived.doubled }, children);
}
export default Component43317;
