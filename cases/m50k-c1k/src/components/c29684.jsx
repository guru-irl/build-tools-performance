import React from 'react';
const LABEL_29684 = 'component_29684';
export function Component29684({ value = 29684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29684, 'data-value': derived.doubled }, children);
}
export default Component29684;
