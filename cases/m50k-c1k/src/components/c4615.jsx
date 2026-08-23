import React from 'react';
const LABEL_4615 = 'component_4615';
export function Component4615({ value = 4615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4615, 'data-value': derived.doubled }, children);
}
export default Component4615;
