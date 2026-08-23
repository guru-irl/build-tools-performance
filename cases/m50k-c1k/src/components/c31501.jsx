import React from 'react';
const LABEL_31501 = 'component_31501';
export function Component31501({ value = 31501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31501, 'data-value': derived.doubled }, children);
}
export default Component31501;
