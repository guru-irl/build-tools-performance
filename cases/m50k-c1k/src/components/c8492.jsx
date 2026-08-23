import React from 'react';
const LABEL_8492 = 'component_8492';
export function Component8492({ value = 8492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8492, 'data-value': derived.doubled }, children);
}
export default Component8492;
