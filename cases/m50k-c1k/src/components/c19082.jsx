import React from 'react';
const LABEL_19082 = 'component_19082';
export function Component19082({ value = 19082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19082, 'data-value': derived.doubled }, children);
}
export default Component19082;
