import React from 'react';
const LABEL_17199 = 'component_17199';
export function Component17199({ value = 17199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17199, 'data-value': derived.doubled }, children);
}
export default Component17199;
