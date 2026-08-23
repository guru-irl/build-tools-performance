import React from 'react';
const LABEL_2721 = 'component_2721';
export function Component2721({ value = 2721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2721, 'data-value': derived.doubled }, children);
}
export default Component2721;
