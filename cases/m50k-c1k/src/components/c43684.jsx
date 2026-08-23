import React from 'react';
const LABEL_43684 = 'component_43684';
export function Component43684({ value = 43684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43684, 'data-value': derived.doubled }, children);
}
export default Component43684;
