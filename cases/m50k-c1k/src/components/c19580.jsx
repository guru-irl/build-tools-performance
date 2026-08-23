import React from 'react';
const LABEL_19580 = 'component_19580';
export function Component19580({ value = 19580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19580, 'data-value': derived.doubled }, children);
}
export default Component19580;
