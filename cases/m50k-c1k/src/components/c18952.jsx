import React from 'react';
const LABEL_18952 = 'component_18952';
export function Component18952({ value = 18952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18952, 'data-value': derived.doubled }, children);
}
export default Component18952;
