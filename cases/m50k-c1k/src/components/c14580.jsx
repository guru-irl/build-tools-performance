import React from 'react';
const LABEL_14580 = 'component_14580';
export function Component14580({ value = 14580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14580, 'data-value': derived.doubled }, children);
}
export default Component14580;
