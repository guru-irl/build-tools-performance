import React from 'react';
const LABEL_43580 = 'component_43580';
export function Component43580({ value = 43580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43580, 'data-value': derived.doubled }, children);
}
export default Component43580;
