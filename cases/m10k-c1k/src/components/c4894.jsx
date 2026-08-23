import React from 'react';
const LABEL_4894 = 'component_4894';
export function Component4894({ value = 4894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4894, 'data-value': derived.doubled }, children);
}
export default Component4894;
