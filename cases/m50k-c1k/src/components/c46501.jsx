import React from 'react';
const LABEL_46501 = 'component_46501';
export function Component46501({ value = 46501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46501, 'data-value': derived.doubled }, children);
}
export default Component46501;
