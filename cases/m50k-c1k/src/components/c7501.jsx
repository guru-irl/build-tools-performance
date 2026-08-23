import React from 'react';
const LABEL_7501 = 'component_7501';
export function Component7501({ value = 7501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7501, 'data-value': derived.doubled }, children);
}
export default Component7501;
