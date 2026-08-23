import React from 'react';
const LABEL_43618 = 'component_43618';
export function Component43618({ value = 43618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43618, 'data-value': derived.doubled }, children);
}
export default Component43618;
