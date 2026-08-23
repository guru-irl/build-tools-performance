import React from 'react';
const LABEL_12035 = 'component_12035';
export function Component12035({ value = 12035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12035, 'data-value': derived.doubled }, children);
}
export default Component12035;
